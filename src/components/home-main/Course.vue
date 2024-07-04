<template>
    <div class="edu-course-area course-area-1 edu-section-gap bg-lighten01">
        <div class="container">
            <SectionTitle preTitle='Popular Courses' title='Pick A Course To Get Started' alignment='section-center' />
            <div class="row g-5">
                <div 
                    class="col-md-6 col-xl-3" 
                    data-aos-delay="150" 
                    data-aos="fade-up" 
                    data-aos-duration="800" 
                    v-for="course in courseData.courses.slice(0, 4)" 
                    :key="course.id"
                >
                    <CourseTypeOne :course="course" />
                </div>
            </div>
            <div class="course-view-all" data-aos-delay="150" data-aos="fade-up" data-aos-duration="1200">
                <RouterLink to="/course/course-one" class="edu-btn">Browse more courses <i class="icon-4"></i></RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
    import courseData from '@/data/course.json';
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle.vue'),
            CourseTypeOne: () => import('@/components/course/CourseTypeOne.vue')
        },
        data () {
            return {
                courseData
            }
        }
    }
</script>