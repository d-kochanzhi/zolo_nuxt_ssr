import type iPageMeta from '@/shared/interfaces/iPageMeta';
/**
 *Composible функция по работе с SEO
 *
 * @export
 * @return {pageMetaFactory} : Фабрика по получению мета данных страницы
 */
export default function usePages() {

    const pageMetaFactory = function (pageType: string): iPageMeta  {
        switch (pageType) {
            case 'home':
            case '/':
            case '':
                return {
                    title: 'Home Page',
                    description: 'Welcome to the Home Page'
                };
            case '/about':
                return {
                    title: 'About Us',
                    description: 'Learn more about our company'
                };
            case '/services':
                    return {
                        title: 'Service',
                        description: 'Learn more about services'
                    };
            case '/feedback':
                return {
                    title: 'Our Feedback',
                    description: 'Get in touch with us'
                };
            default:
                    return {
                        title: '3S - Solana Staking Services',
                        description: 'Solana Staking Services'
                    };
        }       

    }

    return { pageMetaFactory };
}
