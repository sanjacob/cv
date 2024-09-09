export default defineAppConfig({
  profile: {
    name: 'Jacob',
    surname: 'Sánchez',
  },
  education: [
    {
      name: 'University of Central Lancashire',
      url: 'https://uclan.ac.uk',
      grade: '1st',
      start: '2019',
      end: '2023',
      award: 'BSc (Hons) Software Engineering'
    }
  ],
  categories: {
    "langs": { name: "Languages" },
    "ci": { name: "CI/CD" },
    "cloud": { name: "Cloud" },
    "iot": { name: "Embedded" },
  },
  skills: [
    {
      name: "Languages",
      items: [
        { name: 'Python' },
        { name: 'Elixir' },
        { name: 'C' },
        { name: 'C++', lang: 'cpp' },
        { name: 'PHP' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'Dart' },
        { name: 'C#', lang: 'csharp' },
        { name: 'Java' },
        { name: 'SQL' },
        { name: 'Kotlin' },
        { name: 'Lua' },
        { name: 'Dafny' },
        { name: 'LaTeX', lang: 'tex' },
      ]
    },
    {
      name: "User Interface",
      items: [
        { name: 'Vue' },
        { name: 'React', color: '#0074a6' },
        { name: 'Nuxt', color: '#1ba673' },
        { name: 'Next.js', color: '#000' },
        { name: 'Nest', color: '#ea2845' },
        { name: 'express.js', color: '#259dff' },
        { name: 'FastAPI', color: '#009485' },
        { name: 'Flutter', color: '#027DFD' },
        { name: 'Qt', color: '#41cd52' },
        { name: 'Gtk', color: '#3b86e2' },
        { name: 'Jetpack Compose', color: '#d2e3fc' },
        { name: 'HTML' },
        { name: 'CSS' }
      ]
    },
    {
      name: "CI/CD",
      items: [
        { name: 'Ansible', color: '#e00' },
        { name: 'Docker', color: '#00084d' },
        { name: 'GitHub Actions', color: '#1F883D' },
        { name: 'readthedocs', color: '#343131' },
      ]
    },
    {
      name: "Cloud",
      items: [
        { name: 'S3', color: 'blue' },
        { name: 'EC2', color: 'blue' },
        { name: 'Lightsail', color: 'blue' },
        { name: 'S3 Glacier', color: 'blue' },
        { name: 'Lambda', color: 'blue' },
        { name: 'AWS Amplify', color: 'blue' },
        { name: 'Amazon SES', color: 'blue' },
        { name: 'Amazon Connect', color: 'blue' },
        { name: 'IAM', color: 'blue' },
        { name: 'Firebase Realtime DB', color: 'blue' },
        { name: 'Firebase Cloud Messaging', color: 'blue' },
        { name: 'Firebase Auth', color: 'blue' },
        { name: 'Firebase Storage', color: 'blue' }
      ]
    },
    {
      name: "Embedded",
      items: [
        { name: 'Zephyr OS', color: '#761edb' },
        { name: 'Arduino', color: '#008184' },
        { name: 'Raspberry Pi', color: '#cd2355' },
        { name: 'nRF52', color: '#00A9CE' },
        { name: 'KiCad', color: '#6c757d' },
      ]
    },
    {
      name: "Education",
      items: [
        { name: 'Universidad La Salle Oaxaca', color: '#006' },
        { name: 'University of Central Lancashire', color: '#BD1721' },
      ]
    }
  ],
});
