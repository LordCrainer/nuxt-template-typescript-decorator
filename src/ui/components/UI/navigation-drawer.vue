<template>
  <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
    <v-list>
      <v-list-item @click.native="right = !right">
        <v-list-item-action>
          <v-icon light> mdi-repeat </v-icon>
        </v-list-item-action>
        <v-list-item-title>Switch drawer (click me)</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { Provide, Vue } from 'vue-property-decorator'
export default class navigationDrawer extends Vue {
  @Provide() rightDrawer
  @Provide() right = false
  @Provide() rightDrawer = {}
}
</script>

<style></style>
