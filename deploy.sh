mkdir -p node_module_layer/nodejs

cp -rf node_modules package.json package-lock.json node_module_layer/nodejs/

serverless deploy

rm -rf node_module_layer