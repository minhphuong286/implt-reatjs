export const adminMenu = [
    { //Human-resource
        name: 'menu.admin-title.human-resource',
        menus: [
            {
                name: 'menu.admin-hr.crud', link: '/system/user-manage'
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
                name: 'menu.admin-hr.manage-doctor', link: '/system/manage-doctor'
            },
            {
                name: 'menu.admin-hr.manage-schedule-doctor', link: '/doctor/manage-schedule-doctor'
            },
        ]
    },
    { //Clinic
        name: 'menu.admin-title.clinic',
        menus: [
            {
                name: 'menu.admin-clinic.crud', link: '/system/clinic-manage'
            }
        ]
    },
    { //Specialty
        name: 'menu.admin-title.specialty',
        menus: [
            {
                name: 'menu.admin-specialty.crud', link: '/system/specialty-manage'
            }
        ]
    },
    { //Handbook
        name: 'menu.admin-title.handbook',
        menus: [
            {
                name: 'menu.admin-handbook.crud', link: '/system/handbook-manage'
            }
        ]
    },
];
export const doctorMenu = [
    { //Schedule
        name: 'menu.doctor-title.schedule',
        menus: [
            {
                name: 'menu.doctor-schedule.manage-schedule', link: '/doctor/manage-schedule-doctor'
            },
        ]
    },
];