clean:
	rm -rf pb/*

gen:
	make clean
	protoc --js_out=import_style=commonjs,binary:pb/ proto/*.proto pb

run:
	yarn dev