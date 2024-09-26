import Image from "next/legacy/image";

export default function Tech() {
  const skills = [
    {
      imgSrc: "/skills/javascript.svg",
      label: "JavaScript",
      desc: "console.log('Hello, World!')",
    },
    {
      imgSrc: "/skills/python.svg",
      label: "Python",
      desc: "print('Hello, World!')",
    },
    {
      imgSrc: "/skills/lua.svg",
      label: "Lua",
      desc: "print('Hello, World!')",
    },
    {
      imgSrc: "/skills/cpp.svg",
      label: "C++",
      desc: "cout << 'Hello, World!'",
    },
    {
      imgSrc: "/skills/go.svg",
      label: "Go",
      desc: "fmt.Println('Hello, World!')",
    },
    {
      imgSrc: "/skills/bash.svg",
      label: "Shell Script",
      desc: "echo 'Hello, World!'",
    },
    {
      imgSrc: "/skills/java.svg",
      label: "Java",
      desc: "System.out.println('Hello, World!')",
    },
    {
      imgSrc: "/skills/react.svg",
      label: "React",
      desc: "Just React",
    },

    {
      imgSrc: "/skills/next.svg",
      label: "Next.js",
      desc: "Supercharged React",
    },
    {
      imgSrc: "/skills/tailwindcss.svg",
      label: "TailwindCSS",
      desc: "Utility-First CSS",
    },
    {
      imgSrc: "/skills/mui.svg",
      label: "Material-UI",
      desc: "UI Framework",
    },
    {
      imgSrc: "/skills/vite.svg",
      label: "Vite",
      desc: "Blazing Fast Build Tool",
    },
    {
      imgSrc: "/skills/vercel.svg",
      label: "Vercel",
      desc: "Serverless Deployment",
    },
    {
      imgSrc: "/skills/firebase.svg",
      label: "Firebase",
      desc: "Cloud Services",
    },
    {
      imgSrc: "/skills/postgres.svg",
      label: "PostgreSQL",
      desc: "Relational Database",
    },
    {
      imgSrc: "/skills/framer.svg",
      label: "Framer Motion",
      desc: "Animation Library",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-start gap-4 mt-10 ml-5 md:ml-0">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg bg-black/[0.96] antialiased transition-color hover:ring-sky-700 w-11/12 md:w-96"
          >
            <figure className="hover:bg-neutral-900/[0.96] rounded-lg p-2 overflow-hidden w-12 h-12">
              <Image
                src={skill.imgSrc}
                alt={skill.label}
                width={48}
                height={48}
              />
            </figure>
            <div className="">
              <h3 className="text-lg font-semibold text-white">
                {skill.label}
              </h3>
              <p className="text-sm text-gray-400">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
