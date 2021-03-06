
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
const domainRouter = require('express').Router();
const { getAllDomains } = require('./all');
const { getDomain } = require('./getDomain');
const { createDomain } = require('./createDomain')
const { deleteDomain } = require('./deleteDomain')

domainRouter.get('/', getAllDomains)
domainRouter.get('/:domainName', getDomain)
domainRouter.post('/create', createDomain)
domainRouter.delete('/:domainName', deleteDomain)

export = domainRouter;