<script setup lang="ts">
import usePages from '~/shared/usePages';

const { pageMetaFactory } = usePages();
const route = useRoute();

let currentPageMeta = pageMetaFactory(route.path);

useSeoMeta({
  title: currentPageMeta.title,
  ogTitle: currentPageMeta.title,
  description: currentPageMeta.description,
  ogDescription: currentPageMeta.description,
});

 useHead({
  title: currentPageMeta.title,
  meta: [
    { name: 'description', content: currentPageMeta.description }
  ] 
}) 
</script>
