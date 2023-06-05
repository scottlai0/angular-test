export const appName = 'Angular Test';
export const appLogo = "fa-solid fa-hippo"

export const navbarData = [
    {
        groupName: 'Main',
        children: [
            {
                routeLink: '',
                icon: 'fas fa-home',
                label: 'Home'
            }
        ]
    },
    {
        groupName: 'Analytics Pages',
        children: [
            {
                routeLink: 'rerouter',
                icon: 'fas fa-route',
                label: 'Reroute Test Page',
                desc: 'Reroutes to one of the other pages.'
            },
            {
                routeLink: 'tactical',
                icon: 'fas fa-sliders',
                label: 'Test Page 1',
                desc: 'Test page description'
            },
            {
                routeLink: 'qualified',
                icon: 'fas fa-circle-check',
                label: 'Test Page 2',
                desc: 'Test page description'
            },        
            {
                routeLink: 'single-tool',
                icon: 'fas fa-screwdriver-wrench',
                label: 'Tool Releases',
                desc: 'Test page description'
            },
        ]
    },
    {
        groupName: 'Background Templates',
        children: [
            {
                routeLink: 'background-static',
                icon: 'fas fa-image',
                label: 'Static Background'
            },
            {
                routeLink: 'light-up-boxes',
                icon: 'fas fa-square',
                label: 'Lightup Boxes'
            },
        ]
    },
    {
        groupName: 'Extras',
        children: [
            {
                routeLink: 'settings',
                icon: 'fas fa-gear',
                label: 'Settings'
            },
            {
                routeLink: 'about',
                icon: 'fas fa-info-circle',
                label: 'About'
            },
            {
                routeLink: 'admin',
                icon: 'fas fa-lock',
                label: 'Admin'
            }
        ]
    }
]