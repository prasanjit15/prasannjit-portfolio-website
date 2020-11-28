/**
 * MainButtons component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import ButtonLink from '../../../../components/ButtonLink';
import GHButton, { GHButtonProps } from '../../../../components/GHButton';
import { ContactItem } from '../../../../models';
import { getGHCredentials } from '../../../../utils';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface MainButtonsProps {
  contactData: ContactItem[];
  repoUrl: string;
}

const MainButtons: React.FC<MainButtonsProps> = ({ contactData, repoUrl }) => {
  const classes = useStyles();

  const repo = "portfolio-website"
  const username = "prasanjit15"

  const ghButtons: GHButtonProps[] = [
    // Follow button
    {
      resource: {
        endpoint: `https://api.github.com/users/prasanjit15`,
        attr: 'followers',
      },
      href: `https://github.com/prasanjit15`,
      title: `Follow @prasanjit15 on GitHub`,
      icon: ['fab', 'github'],
      size: 'lg',
      text: `Follow @prasanjit15`,
    },
    // Stargazers button
    {
      resource: {
        endpoint: `https://github.com/prasanjit15/prasannjit-portfolio-website`,
        attr: 'stargazers_count',
      },
      href: 'https://github.com/prasanjit15/prasannjit-portfolio-website',
      title: `Star prasanjit15/portfolio-website on GitHub`,
      icon: 'star',
      size: 'sm',
      text: 'Star',
    },
  ];

  const mainContact = contactData.find((c) => c.isMain) as ContactItem;

  return (
    <div className={classes.root}>
      <div>
        {ghButtons.map((btn) => (
          <GHButton key={`gh-btn-${btn.resource.attr}`} {...btn} />
        ))}
      </div>
      <div>
        <ButtonLink
          href={mainContact.url}
          title={`Find me on ${mainContact.name}`}
          icon={mainContact.icon as IconProp}
          size="lg"
          text="Contact Me"
        />
      </div>
    </div>
  );
};

export default MainButtons;
