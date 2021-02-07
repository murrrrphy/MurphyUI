rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "first commit" &&
git branch -M master &&
git remote add origin git@github.com:murrrrphy/MurphyUI-website.git
git push -f -u origin master &&
cd ..
echo https://murrrrphy.github.io/MurphyUI-website/#/