import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/Index.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Index
    },
    {
        path: '/my-account',
        name: 'MyAccount',
        component: Index
    },
    {
        path: '/course/course-one',
        name: 'Course',
        component: Index
    },
    {
        path: '/distant-learning',
        name: 'DistantLearning',
        component: Index
    },
    {
        path: '/university',
        name: 'University',
        component: Index
    },
    {
        path: '/online-academy',
        name: 'OnlineAcademy',
        component: Index
    },
    {
        path: '/kitchen-coach',
        name: 'KitchenCoach',
        component: Index
    },
    {
        path: '/yoga-instructor',
        name: 'YogaInstructor',
        component: Index
    },
    {
        path: '/kindergarten',
        name: 'Kindergarten',
        component: Index
    },
    {
        path: '/landing-demo',
        name: 'LandingDemo',
        component: Index
    },
    {
        path: '/about-us-one',
        name: 'AboutUsOne',
        component: Index
    },
    {
        path: '/about-us-two',
        name: 'AboutUsTwo',
        component: Index
    },
    {
        path: '/about-us-three',
        name: 'AboutUsThree',
        component: Index
    },
    {
        path: '/instructor/instructor-one',
        name: 'InstructorInstructorOne',
        component: Index
    },
    {
        path: '/instructor/instructor-two',
        name: 'InstructorTwo',
        component: Index
    },
    {
        path: '/instructor/instructor-three',
        name: 'InstructorInstructorThree',
        component: Index
    },
    {
        path: '/instructor/instructor-profile',
        name: 'InstructorInstructorTwo',
        component: Index
    },
    {
        path: '/faq',
        name: 'Faq',
        component: Index
    },
    {
        path: '/404',
        name: '404',
        component: Index
    },
    {
        path: '/coming-soon',
        name: 'ComingSoon',
        component: Index
    },
    {
        path: '/gallery-masonry',
        name: 'GalleryMasonry',
        component: Index
    },
    {
        path: '/event/event-grid',
        name: 'EventGrid',
        component: Index
    },
    {
        path: '/event/event-list',
        name: 'EventList',
        component: Index
    },
    {
        path: '/event/event-details',
        name: 'EventDetails',
        component: Index
    },
    {
        path: '/pricing-table',
        name: 'PricingTable',
        component: Index
    },
    {
        path: '/purchase-guide',
        name: 'PurchaseGuide',
        component: Index
    },
    {
        path: '/privacy-policy',
        name: 'PrivacyPolicy',
        component: Index
    },
    {
        path: '/terms-condition',
        name: 'TermsCondition',
        component: Index
    },
    {
        path: '/gallery-grid',
        name: 'GalleryGrid',
        component: Index
    },
    {
        path: '/shop',
        name: 'Shop',
        component: Index
    },
    {
        path: '/shop/product-details',
        name: 'ShopDetails',
        component: Index
    },
    {
        path: '/shop/cart',
        name: 'ShopCart',
        component: Index
    },
    {
        path: '/shop/wishlist',
        name: 'Wishlist',
        component: Index
    },
    {
        path: '/shop/checkout',
        name: 'ShopCheckout',
        component: Index
    },
    {
        path: '/course/course-two',
        name: 'CourseTwo',
        component: Index
    },
    {
        path: '/course/course-three',
        name: 'CourseThree',
        component: Index
    },
    {
        path: '/course/course-four',
        name: 'CourseFour',
        component: Index
    },
    {
        path: '/course/course-five',
        name: 'CourseFive',
        component: Index
    },
    {
        path: '/course/course-details',
        name: 'CourseDetails',
        component: Index
    },
    {
        path: '/course/course-details-2',
        name: 'CourseDetails2',
        component: Index
    },
    {
        path: '/course/course-details-3',
        name: 'CourseDetails3',
        component: Index
    },
    {
        path: '/blog/blog-masonry',
        name: 'BlogMasonry',
        component: Index
    },
    {
        path: '/blog/blog-list',
        name: 'BlogList',
        component: Index
    },
    {
        path: '/blog/blog-details',
        name: 'BlogDetails',
        component: Index
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: Index
    },
    {
        path: '/contact-me',
        name: 'ContactMe',
        component: Index
    },
    {
        path: '/blog/blog-standard',
        name: 'BlogStandard',
        component: Index
    },

    // otras rutas...
];

const index = createRouter({
    history: createWebHistory(),
    routes
});

export default index;
