'use client';

import { createContext, FC, useContext, useState } from 'react';

import {
  fetchExperiences,
  fetchMyInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
  fetchTestimonials,
} from '@/rest';
import { generateImageUrl } from '@/sanity/lib/image';
import {
  CombinedTypingsForLandingPage,
  FCVanillaProviderType,
  MyInfo,
} from '@/typings';

type SiteDataContextType = {
  getMyInfo: () => Promise<CombinedTypingsForLandingPage['myInfo']>;
  getExperiences: () => Promise<CombinedTypingsForLandingPage['experiences']>;
  getProjects: () => Promise<CombinedTypingsForLandingPage['projects']>;
  getSkills: () => Promise<CombinedTypingsForLandingPage['skills']>;
  getSocials: () => Promise<CombinedTypingsForLandingPage['socials']>;
  getTestimonials: () => Promise<CombinedTypingsForLandingPage['testimonials']>;
};

export const SiteDataProvider: FC<FCVanillaProviderType> = ({
  children,
}: FCVanillaProviderType) => {
  const [myInfo, setMyInfo] =
    useState<CombinedTypingsForLandingPage['myInfo']>();
  const [experiences, setExperiences] = useState<
    CombinedTypingsForLandingPage['experiences']
  >([]);
  const [projects, setProjects] = useState<
    CombinedTypingsForLandingPage['projects']
  >([]);
  const [skills, setSkills] = useState<CombinedTypingsForLandingPage['skills']>(
    []
  );
  const [socials, setSocials] = useState<
    CombinedTypingsForLandingPage['socials']
  >([]);
  const [testimonials, setTestimonials] = useState<
    CombinedTypingsForLandingPage['testimonials']
  >([]);

  const getExperiences = async () => {
    if (experiences.length) return experiences;

    const experiencesResponse = await fetchExperiences();
    const modifiedExperiences = experiencesResponse.map((experience) => ({
      ...experience,
      companyImageUrl: generateImageUrl({ source: experience.companyImage }),
      techTags: experience.techTags.map((techTag) => ({
        ...techTag,
        imageUrl: generateImageUrl({ source: techTag.image }),
      })),
    }));
    setExperiences(modifiedExperiences);
    return modifiedExperiences;
  };

  const getMyInfo = async () => {
    if (myInfo) return myInfo;

    const info = await fetchMyInfo();
    const modifiedInfo = {
      ...info,
      heroImageURL: generateImageUrl({ source: info.heroImage }),
    };
    setMyInfo(modifiedInfo);
    return modifiedInfo;
  };

  const getProjects = async () => {
    if (projects) return projects;

    const projectsResponse = await fetchProjects();
    const modifiedProjects = projectsResponse.map((project) => ({
      ...project,
      imageUrl: generateImageUrl({ source: project.image }),
      techTags: project.techTags.map((techTag) => ({
        ...techTag,
        imageUrl: generateImageUrl({ source: techTag.image }),
      })),
    }));
    setProjects(modifiedProjects);
    return modifiedProjects;
  };

  const getSkills = async () => {
    if (skills) return skills;

    const skillsResponse = await fetchSkills();
    const modifiedSkills = skillsResponse.map((skill) => ({
      ...skill,
      imageUrl: generateImageUrl({ source: skill.image }),
    }));
    setSkills(modifiedSkills);
    return modifiedSkills;
  };

  const getSocials = async () => {
    if (socials) return socials;

    const socialsResponse = await fetchSocials();
    setSocials(socialsResponse);
    return socialsResponse;
  };

  const getTestimonials = async () => {
    if (testimonials) return testimonials;
    const testimonialsResponse = await fetchTestimonials();
    setTestimonials(testimonialsResponse);
    return testimonialsResponse;
  };

  return (
    <SiteDataContext.Provider
      value={{
        getExperiences,
        getMyInfo,
        getProjects,
        getSkills,
        getSocials,
        getTestimonials,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

export const SiteDataContext = createContext<SiteDataContextType>({
  getMyInfo: () => Promise.resolve({} as MyInfo),
  getExperiences: () => Promise.resolve([]),
  getProjects: () => Promise.resolve([]),
  getSkills: () => Promise.resolve([]),
  getSocials: () => Promise.resolve([]),
  getTestimonials: () => Promise.resolve([]),
});

export const useSiteData = () => useContext(SiteDataContext);
