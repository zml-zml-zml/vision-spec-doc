/*
 * @Descripttion: 
 * @Author: zmlxsg
 * @Date: 2021-08-23 10:39:34
 * @LastEditors: zmlxsg
 * @LastEditTime: 2021-08-30 14:56:16
 */
import { onMounted } from 'vue'

export default function fetchReleaseTag() {
  onMounted(() => {
    // fetch('https://api.github.com/repos/vitejs/docs-cn/releases/latest')
    //   .then((res) => res.json())
    //   .then((json) => {
    //     const mainTitle = document.getElementById('main-title')
    //     mainTitle.style.position = 'relative'

    //     const docsReleaseTag = document.createElement('span')
    //     docsReleaseTag.classList.add('release-tag')
    //     const releaseTagName = json.tag_name
    //     docsReleaseTag.innerText = '1.0.0'

    //     if (releaseTagName !== undefined) {
    //       mainTitle.appendChild(docsReleaseTag)
    //     }
    //   })

      const mainTitle = document.getElementById('main-title')
        mainTitle.style.position = 'relative'
      
      const docsReleaseTag = document.createElement('span')
        docsReleaseTag.classList.add('release-tag')
      
      const releaseTagName = 'v1.0.0'
        docsReleaseTag.innerText = 'v1.0.0'
      
      if (releaseTagName !== undefined) {
          mainTitle.appendChild(docsReleaseTag)
        }
  })
}
