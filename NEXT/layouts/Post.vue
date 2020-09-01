<template>
  <div id="vuepress-theme-blog__post-layout">
    <article
      class="vuepress-blog-theme-content"
      itemscope
      itemtype="https://schema.org/BlogPosting"
    >
      <div class="row justify-content-center">
        <div class="col-md-8">
          <header>
            <span class="text-muted">
              <PostMeta :date="$frontmatter.date" />
            </span>
            <h1 class="article-head mt-3" itemprop="name headline">{{ $frontmatter.title }}</h1>
            <p class="lead">{{ $frontmatter.description }}</p>

            <Avatar />
          </header>
        </div>
      </div>

      <div class="row justify-content-center text-center mt-4 mb-40">
        <div class="col-md-9">
          <img class="featuredimg" :src="$frontmatter.featuredimg" />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-8">
          <Content itemprop="articleBody" />

          <PostMeta :tags="$frontmatter.tags" />
        </div>
      </div>
    </article>

    <!-- Image Gallery -->
    <div v-if="$frontmatter.gallery">
      <div
        v-for="image in images"
        :key="image"
        class="row justify-content-center text-center mt-4 mb-40"
      >
        <div class="col-md-9">
          <img class="" :src="image" />
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-9">
        <Newsletter v-if="$service.email.enabled" />
        <Comment />
      </div>
    </div>

    <Toc />
  </div>
</template>

<script>
import Toc from '@theme/components/Toc.vue'
import PostMeta from '@theme/components/PostMeta.vue'
import Avatar from '@theme/components/Avatar.vue'
import { Comment } from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: {
    Toc,
    PostMeta,
    Avatar,
    Comment,
    Newsletter: () => import('@theme/components/Newsletter.vue'),
  },
  data: () => ({
    images: '',
  }),
  computed: {
    galleryLoc() {
      return this.$frontmatter.gallery
    },
  },
  mounted() {
    // if ('gallery' in this.$page.frontmatter) {
    this.loadImages()
    // }
  },
  methods: {
    /**
     * Load all images from a directory
     * https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
     */
    importAll(r) {
      return r.keys().map(r)
    },
    // FIXME https://github.com/webpack/webpack/issues/9300
    loadImages() {
      this.images = this.importAll(
        require.context('./img', true, /\.(png|jpe?g|svg)$/)
      )
      console.log(this.images)
    },
  },
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Merriweather:400,400i,700&display=swap');
</style>
