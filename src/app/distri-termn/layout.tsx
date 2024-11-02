import Header from "@/components/layout/header-distri-termn"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
    </>
  )
}