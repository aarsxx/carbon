import { Column } from '../ui/container/column';
import { Header } from '../ui/content/header';
import { TextCenter } from '../ui/content/textCenter';
import { MarginMedium } from '../ui/margins/marginMedium';
import { WavingHand } from '../wavingHand';
import { Title } from './sectionHero.styles';

export const SectionHero: React.FC = () => {
  return (
    <section>
      <Column>
        <TextCenter>
          <div>
            <Title>
              <WavingHand /> Hello World!
            </Title>
          </div>
          <Header muted as="h4">
            I'm a developer, writer, creator and minimalist. I do some code & design stuff.
          </Header>
          <Header muted style={{ marginTop: '0px' }} as="h5">
            Software is the medium through which I express myself.  
          </Header>
        </TextCenter>
        <MarginMedium />
      </Column>
    </section>
  );
};

SectionHero.displayName = 'SectionHero';
