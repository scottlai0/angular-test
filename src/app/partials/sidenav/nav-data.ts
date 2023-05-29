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
        groupName: 'Main',
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