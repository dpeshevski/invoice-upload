import models from '../models/index';

const { invoice, row } = models;

async function list(req, res, next) {
  await next;
}

async function create (req, res, next) {
  await next;
}

export default {
  list,
  create
};
