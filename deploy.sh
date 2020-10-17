rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "first commit" &&
git branch -M master &&
git remote add origin git@github.com:murrrrphy/Murphy-UI.git
git push -f -u origin master &&
cd ..
echo https://murrrrphy.github.io/Murphy-UI