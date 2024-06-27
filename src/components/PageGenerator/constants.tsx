import { Layout } from '@homework-task/components/Layout.tsx';
import { PageSection } from '@homework-task/components/PageGenerator/index.tsx';

export const Layouts = {
    layoutSection: Layout,
};

export const data: PageSection[] = [
    {
        type: 'layoutSection',
        props: { background: 'bg-cream' },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Hero Title',
                    image: '/media/landing/hero.svg',
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { background: 'bg-cream' },
        components: [
            {
                type: 'componentItemsShowcase',

                props: {
                    items: [
                        {
                            title: 'Item1',
                            description: 'Test description',
                            image: '/media/cats/cat_2.png',
                        },
                    ],
                },
            },
            {
                type: 'componentTrustBar',
                props: {
                    images: ['/media/cats/cat_3.png', '/media/cats/cat_4.png'],
                },
            },
        ],
    },
];
