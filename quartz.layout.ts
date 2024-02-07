import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.MobileOnly(Component.Explorer({title: "Menu",folderDefaultState: "collapsed",useSavedState: true,})),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents()),
    //Component.Comments(),
    //Component.MobileOnly(Component.Comments()),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({title: "Menu",folderDefaultState: "collapsed",useSavedState: true,
    mapFn: (node) => {
      // dont change name of root node
      if (node.depth > 0) {
        // set emoji for file/folder
        if (node.file) {
          node.displayName = "🍊 " + node.displayName
        } else {
          node.displayName = "🌳 " + node.displayName
        }
      }
    },
  })),
    Component.DesktopOnly(Component.TableOfContents()),
    
  ],
  right: [
    Component.Graph({localGraph:{repelForce: 0.8,linkDistance: 50,},globalGraph:{repelForce: 0.8,linkDistance: 50,}}),
    Component.Backlinks(),
    
    //Component.DesktopOnly(Component.RecentNotes()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph({localGraph:{repelForce: 0.5,linkDistance: 40,},globalGraph:{repelForce: 0.5,linkDistance: 40,}}),
  ],
}
