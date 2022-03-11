
echo "Cleaninig Icons"
npx svgo -f real-estate
npx svgo -f communication
npx svgo -f nav-alert
npx svgo -f action
npx svgo -f other

echo "Done cleaning :broom:"

ComponentDir="ReactNativeIcons"

echo "Transforming icons"
rm -r "${ComponentDir}"
mkdir "${ComponentDir}"
npx @svgr/cli --native --icon --no-prettier --filename-case kebab --replace-attr-values "#000={props.fill}" --out-dir "$ComponentDir" -- real-estate
npx @svgr/cli --native --icon --no-prettier --filename-case kebab --replace-attr-values "#000={props.fill}" --out-dir "$ComponentDir" -- communication
npx @svgr/cli --native --icon --no-prettier --filename-case kebab --replace-attr-values "#000={props.fill}" --out-dir "$ComponentDir" -- nav-alert
npx @svgr/cli --native --icon --no-prettier --filename-case kebab --replace-attr-values "#000={props.fill}" --out-dir "$ComponentDir" -- action
npx @svgr/cli --native --icon --no-prettier --filename-case kebab --replace-attr-values "#000={props.fill}" --out-dir "$ComponentDir" -- other

echo "Done transforming icons"

mkdir react-native
rm react-native/map.ts

printf "\e[1m\e[92mCreating the map...\e[0m\n"
echo "const base = \"./${ComponentDir}/\";" > react-native/map.ts
echo >> react-native/map.ts
echo "export const ${ComponentDir} = {" >> react-native/map.ts
for file in ${ComponentDir}/*.js
do
  base_name=$(basename ${file%.js})
  echo $base_name
  echo "  \"$base_name\": require(base + \"$base_name\").default," >> react-native/map.ts
done
echo "};" >> react-native/map.ts