
# 👨‍💻 perala.dev

perala.dev is my personal portfolio site. The site is built with Vite, React, TypeScript and Tailwind CSS. The website pulls repository data from the GitHub API and then displays public, non-archived repositories in the "projects" section of the website. 

The website is deployed to GitHub Pages with the help of [GitHub Actions](https://github.com/kaperala/perala.dev/blob/main/.github/workflows/deploy.yml) which push the deployment code to the [gh-pages](https://github.com/kaperala/perala.dev/tree/gh-pages) branch.



## 📝 Usage/Requirements

Feel free to use the source code for whatever you want. Here is a quick rundown of the setup:

**To run the project you will need Node.js v16 or higher for the development server.**

```bash
  git clone https://github.com/kaperala/perala.dev.git
```

Go to the project directory

```bash
  cd perala.dev
```

Install dependencies

```bash
  npm install
```

Start Vite development server

```bash
  npm run dev
```

