export type Certification= {
    id: number,
    title: string,
    organizer: string,
    file: string
}

export const certifications: Certification[] = [
    {
        id: 1,
        title: 'Problem Solving (Basic)',
        organizer: 'HackerRank',
        file: '/certificates/Problem_Solving_Basic.pdf'
    },
    {
        id: 2,
        title: 'Start Programming with Dart',
        organizer: 'Dicoding',
        file: '/certificates/Dart.pdf'
    },
    
]