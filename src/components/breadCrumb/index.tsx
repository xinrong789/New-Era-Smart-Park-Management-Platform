import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { Breadcrumb } from "antd"

interface MenuItem {
  key: string
  label: string
  children?: MenuItem[]
}

// interface BreadCrumb {
//   label: string
// }

function findBreadCrumbPath(path: string, MenuItems: MenuItem[]): string[] {
  const pathSegment: string[] = []
  function findPath(currentPath: string, items: MenuItem[]) {
    for (let item of items) {
      if (currentPath.startsWith(item.key)) {
        pathSegment.push(item.label)
        if (item.children) {
          findPath(currentPath, item.children)
        }
        break
      }
    }
    console.log("pathSegment", pathSegment)
    return pathSegment
  }
  return findPath(path, MenuItems)
}
function MyBreadCrumb() {
  const location = useLocation()
  const { menuList } = useSelector((state: any) => state.authSlice)
  const breadList = findBreadCrumbPath(location.pathname, menuList).map(
    (item) => ({
      title: item
    })
  )
  console.log(location)
  return <Breadcrumb items={breadList} className="mt mb" />
}

export default MyBreadCrumb
