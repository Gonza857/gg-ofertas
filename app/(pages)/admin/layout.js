import AdminNavbar from "@/components/personalized-ui/AdminNavbar";

function AdminLayout({children}) {
    return (
        <>
            <AdminNavbar />
            {children}
        </>
    )
}

export default AdminLayout;