import React from 'react';
import Products from '../apis/products'
import Amount from '../apis/amount'
import Users from '../apis/users'
import ProductsIgnativos from '../apis/productsIgnativos'

import Categories from './statistics/categories'
import LastProduct from '../apis/lastProduct'



function main() {
  return (
    <div className="container-fluid">

		<div className="d-sm-flex align-items-center justify-content-between mb-4">
			<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
		</div>

		<div className="row">
			< Products />
			< Amount />
			< Users />
			< ProductsIgnativos />
		</div>

		<div className="row">
			< LastProduct/>

			<div className="col-lg-6 mb-4">						
				< Categories/>
			</div>
		</div>
	</div>

  );
}

export default main;
