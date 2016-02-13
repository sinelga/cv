live-server --no-browser --entry-file=index.html

mkdir version_desk_react_00
cd $_
npm init -y
cd 
git add version_desk_react_00 && git commit -m "Initial dist subtree commit"
git subtree push --prefix version_desk_react_00  origin version_desk_react_00