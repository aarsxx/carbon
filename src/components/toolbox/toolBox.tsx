import { ToolboxCategory } from '../../types/ToolboxCategory';
import { ResponsiveGrid } from '../ui/container/responsiveGrid';
import { Header } from '../ui/content/header';
import { MarginSmall } from '../ui/margins/marginSmall';
import { Line, List, ListItem } from './toolBox.styles';

interface ToolBoxProps {
  categories: ToolboxCategory[];
}

export const ToolBox: React.FC<ToolBoxProps> = ({ categories }) => {
  return (
    <>
      <h2>🪴 My skill set</h2>
      <p>
      I have previously used everything from Swift to build app.
      Nowadays, however, it is mostly TypeScript for front and backend that is closest at hand in the form of React and Node. 
      </p>
      <MarginSmall />
      <ResponsiveGrid gutter={1} itemWidth="175px">
        {categories.map(({ title, items }) => (
          <div key={title}>
            <Header bold as="h3">
              {title}
            </Header>
            <Line width="115px" />
            <List as="ul">
              {items.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </List>
            <MarginSmall />
          </div>
        ))}
      </ResponsiveGrid>
    </>
  );
};

ToolBox.displayName = 'ToolBox';
