export const navbarData = [
    {
        groupName: 'Summary',
        children: [
            {
                routeLink: '',
                icon: 'fas fa-home',
                label: 'Summary'
            }
        ]
    },
    {
        groupName: 'Analytics Pages',
        children: [
            {
                routeLink: 'tactical',
                icon: 'fas fa-sliders',
                label: 'Tactical Releases'
            },
            {
                routeLink: 'qualified',
                icon: 'fas fa-circle-check',
                label: 'Qualified Releases'
            },        
            {
                routeLink: 'single-tool',
                icon: 'fas fa-screwdriver-wrench',
                label: 'Tool Releases'
            },
        ]
    },
    {
        groupName: 'Background Templates',
        children: [
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
            }
        ]
    }
]