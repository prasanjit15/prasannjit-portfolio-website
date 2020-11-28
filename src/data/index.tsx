import React from 'react';
import Greeter from '../views/Greeter';
import Diploma from '../views/Diploma';
import { PageLink, TabLink } from '../models';
import { jsOrange, midBlue, green, pink } from '../theme/colors';

import staticData from './json/static.json';
import contactData from './json/contact.json';
import diplomaData from './json/diploma.json';
import pkg from '../../package.json';

import { calculateDiplomaProgress } from '../utils';

export const pages: PageLink[] = [
  {
    name: 'Home',
    url: '/',
    icon: 'home',
    isInternal: true,
    comp: () => (
      <Greeter
        staticData={staticData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />
    ),
  },
  {
    name: 'Diploma in SWE',
    url: '/diploma',
    icon: 'graduation-cap',
    isInternal: true,
    badge: `${calculateDiplomaProgress(diplomaData, 0)}%`,
    comp: () => <Diploma diplomaData={diplomaData} staticData={staticData} />,
  },
];

export const tabs: TabLink[] = [
  {
    name: 'skills',
    url: '/skills',
    icon: ['fas', 'database'],
    color: jsOrange,
    mdFileName: 'skills',
  },
  {
    name: 'education',
    url: '/education',
    icon: 'university',
    color: midBlue,
    mdFileName: 'education',
  },
  {
    name: 'projects',
    url: '/projects',
    icon: 'sliders-h',
    color: green,
    mdFileName: 'projects',
  },
  {
    name: 'achievements',
    url: '/certificates',
    icon: ['fas', 'trophy'],
    color: pink,
    mdFileName: 'certificates',
  },
];
