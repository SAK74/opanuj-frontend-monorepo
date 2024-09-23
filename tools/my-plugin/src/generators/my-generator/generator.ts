import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  names,
  readProjectConfiguration,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { MyGeneratorGeneratorSchema } from './schema';
import { libraryGenerator } from '@nx/js';

export async function myGeneratorGenerator(
  tree: Tree,
  options: MyGeneratorGeneratorSchema
) {
  const params = { ...options, name: names(options.name).fileName };
  // const projectRoot = `libs/${params.name}`;
  await libraryGenerator(tree, {
    name: options.name,
    strict: true,
    bundler: 'esbuild',
    compiler: 'tsc',
    directory: 'libs',
  });

  const projectRoot = readProjectConfiguration(tree, params.name).root;
  console.log({ projectRoot });

  // addProjectConfiguration(tree, params.name, {
  //   root: projectRoot,
  //   projectType: options.type,
  //   sourceRoot: `${projectRoot}/src`,
  //   targets: {},
  // });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, params);
  await formatFiles(tree);
}

export default myGeneratorGenerator;
