import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { formType } from './formType'
import { heroType } from './heroType'
import imageGalleryType from './imageGalleryType'
import pageType from './pageType'
import { promotionType } from './promotionType'
import textWithIllustrationType from './textWithIllu'
import { videoType } from './videoType'
import projectType from './projectType'
import expertisesType from './expertisesType'
import sectionImageOverlay from './sectionImageOverlay'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, formType, heroType, imageGalleryType, pageType, promotionType,textWithIllustrationType,videoType, projectType, expertisesType, sectionImageOverlay],
}
