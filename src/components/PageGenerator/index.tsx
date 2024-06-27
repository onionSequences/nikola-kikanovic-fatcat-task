import { Hero } from '@homework-task/components/Hero.tsx';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase.tsx';
import { TrustBar } from '@homework-task/components/TrustBar.tsx';
import { Layouts } from '@homework-task/components/PageGenerator/constants';
import { Item } from '@homework-task/lib/shared/types.ts';

type PageGeneratorProps = {
    data: PageSection[];
};

export type PageSection = {
    type: keyof typeof Layouts;
    props: LayoutProps;
    components: PageComponent[];
};

type LayoutProps = {
    [key: string]: string | string[];
};

type PageComponent = {
    type: string;
    props: { [key: string]: unknown };
};

const PageGenerator = ({ data }: PageGeneratorProps) => {
    return (
        <>
            {data.map((section: PageSection, index: number) => {
                const Layout = Layouts[section.type];

                return (
                    <Layout
                        key={section.type + index}
                        background={section.props.background as string}
                    >
                        {renderComponents(section.components)}
                    </Layout>
                );
            })}
        </>
    );
};

const renderComponents = (components: PageComponent[]) => {
    return components.map((component, index) => {
        switch (component.type) {
            case 'componentHero':
                return (
                    <Hero
                        key={index}
                        title={component.props.title as string}
                        image={component.props.image as string}
                    />
                );
            case 'componentItemsShowcase':
                return (
                    <ItemsShowcase
                        key={index}
                        items={component.props.items as unknown as Item[]}
                    />
                );
            case 'componentTrustBar':
                return (
                    <TrustBar
                        key={index}
                        images={component.props.images as string[]}
                    />
                );
            default:
                return null;
        }
    });
};

export default PageGenerator;
