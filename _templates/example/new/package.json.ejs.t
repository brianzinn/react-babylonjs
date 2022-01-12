---
to: examples/<%=name%>/package.json
---

{
  "name": "@react-babylonjs/<%=name%>",
  "version": "1.0.0",
  "description": "<%=h.changeCase.title(name)%>",
  "keywords": ["typescript", "react", "starter"],
  "main": "src/index.tsx",
  "dependencies": {
    "@babylonjs/core": "4.2.1",
    "@babylonjs/gui": "4.2.1",
    "react": "17.0.2",
    "react-babylonjs": "3.0.31",
    "react-dom": "17.0.2",
    "react-scripts": "4.0.3"
  },
  "devDependencies": {
    "@types/react": "17.0.20",
    "@types/react-dom": "17.0.9",
    "typescript": "4.4.2",
    "prettier": "2.5.1",
    "prettier-plugin-organize-imports": "2.3.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "browserslist": [">0.2%", "not dead", "not ie <= 11", "not op_mini all"]
}