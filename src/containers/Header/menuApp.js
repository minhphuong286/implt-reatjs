export const adminMenu = [
    { //Human-resource
        name: 'menu.title.human-resource',
        menus: [
            {
                name: 'menu.admin-hr.crud', link: '/system/user-manager'
            },
            {
                name: 'menu.admin-hr.crud-redux', link: '/system/user-byredux'
            },
            {
                name: 'menu.admin-hr.manage-admin', link: '/system/user-admin'

                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                // ]
            },
            {
                name: 'menu.admin-hr.manage-doctor', link: '/system/user-doctor'
            },
        ]
    },
    { //Clinic
        name: 'menu.title.clinic',
        menus: [
            {
                name: 'menu.admin-clinic.crud', link: '/system/clinic-manage'
            }
        ]
    },
    { //Specialty
        name: 'menu.title.specialty',
        menus: [
            {
                name: 'menu.admin-specialty.crud', link: '/system/specialty-manage'
            }
        ]
    },
    { //Handbook
        name: 'menu.title.handbook',
        menus: [
            {
                name: 'menu.admin-handbook.crud', link: '/system/handbook-manage'
            }
        ]
    },
];