import { Project } from '../../types/Project';
import { TextMuted } from '../ui/content/textMuted';
import { ResponsiveGrid } from '../ui/container/responsiveGrid';
import { CardProject } from '../cards/cardProject/cardProject';

interface SectionProjectsProps {
  projects: Project[];
}

export const SectionProjects: React.FC<SectionProjectsProps> = ({ projects }) => {
  return (
    <section>
      <h2>Work</h2>
      <TextMuted>Notable work and contributions</TextMuted>
      <ResponsiveGrid itemWidth="250px" gutter={2}>
        {projects.map(({ title, icon, tags: _tags, ...rest }) => (
          <CardProject key={title} title={`${icon} ${title}`} {...rest} />
        ))}
      </ResponsiveGrid>
    </section>
  );
};

SectionProjects.displayName = 'SectionProjects';
