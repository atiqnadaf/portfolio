const asset = (name) => `/assets/${name}`;

export const portfolio = {
  profile: {
    name: 'Atiq Nadaf',
    role: 'Tech enthusiast and student',
    image: asset('main.png'),
    resume: asset('ATIQ_RESUME_CSE.pdf'),
    about: [
      'Hello, I’m Atiq Nadaf, a tech enthusiast and student.',
      'I enjoy building responsive and creative web designs.',
      'Always eager to explore and learn new skills.',
      'Currently focused on improving my Programming skills.',
    ],
    socials: [
      {
        label: 'GitHub',
        href: 'https://github.com/atiqnadaf',
        icon: asset('github.png'),
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/atiq-nadaf-603871299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        icon: asset('linkedin.png'),
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/_atiqnadaf/',
        icon: asset('insta.png'),
      },
    ],
  },
  projects: [
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio created with HTML, CSS, and JS.',
      href: '#home',
      stack: ['HTML', 'CSS', 'JavaScript'],
      visual: 'portfolio',
    },
    {
      title: 'Jewellery Shop Management System',
      description: 'A management system project to handle sales, inventory, and billing.',
      href: 'https://jsms.freedev.app/',
      credentials: 'Username: demo, Password: demo2026',
      stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      visual: 'jewellery',
    },
    {
      title: 'Netflix Clone',
      description: 'Designed and developed a responsive Netflix landing page for practice and learning.',
      href: 'https://relaxed-froyo-e07cf5.netlify.app/',
      stack: ['HTML', 'CSS'],
      visual: 'netflix',
    },
  ],
  education: [
    {
      level: 'BCA',
      years: '2023–2026',
      degree: 'Bachelor of Computer Applications',
      college: 'College of Computer Science and Information Technology, Latur',
      grade: 'A+',
      cgpa: '8.92',
    },
    {
      level: '12th',
      years: '2022–2023',
      college: 'K.K.B College, Latur',
      percentage: '62.33%',
    },
    {
      level: '10th',
      years: '2020–2021',
      college: 'Shri Deshikendra Vidyalaya, Latur',
      percentage: '80.20%',
    },
  ],
  contacts: [
    {
      label: 'Email',
      href: 'mailto:atiqnadafonline@gmail.com',
      value: 'atiqnadafonline@gmail.com',
      icon: asset('email.png'),
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/919404641505',
      value: '9404641505',
      icon: asset('WhatsApp.png'),
    },
    {
      label: 'GitHub',
      href: 'https://github.com/atiqnadaf',
      value: 'atiqnadaf',
      icon: asset('github.png'),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/atiq-nadaf-603871299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      value: 'Atiq Nadaf',
      icon: asset('linkedin.png'),
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/_atiqnadaf/',
      value: '_atiqnadaf',
      icon: asset('insta.png'),
    },
  ],
};
