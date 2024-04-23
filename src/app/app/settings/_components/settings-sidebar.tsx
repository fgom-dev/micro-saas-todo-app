'use client'

import { DashboardSidebarNav, DashboardSidebarNavLink, DashboardSidebarNavMain } from "@/components/dashboard/dashboard-sidebar"
import { usePathname } from "next/navigation"

export function SettingsSidebar() {
  const pathName = usePathname()

  const isActive = (path: string) => {
    return pathName === path
  }

  return (
    <aside>
      <DashboardSidebarNav>
        <DashboardSidebarNavMain>
          <DashboardSidebarNavLink href={"/app/settings"} active={isActive('/app/settings')}>
            Meu perfil
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink href={"/app/settings/theme"} active={isActive('/app/settings/theme')}>
            Aparência
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink href={"/app/settings/billing"} active={isActive('/app/settings/billing')}>
            Assinatura
          </DashboardSidebarNavLink>
        </DashboardSidebarNavMain>
      </DashboardSidebarNav >
    </aside>
  )
}