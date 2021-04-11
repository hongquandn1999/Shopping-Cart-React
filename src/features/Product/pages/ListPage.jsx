import {
	Box,
	Container,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';

const useStyles = makeStyles((theme) => ({
	root: {},

	left: {
		width: '250px',
	},

	right: {
		flex: '1 1 0',
	},

	pagination: {
		display: 'flex',
		justifyContent: 'center',
		flexFlow: 'row nowrap',
		marginTop: '20px'
	}
}));

function ListPage(props) {
	const classes = useStyles();
	const [productList, setProductList] = useState([]);
	const [pagination, setPagination] = useState({
		limit: 9,
		total: 10,
		page: 1,
	});
	const [loading, setLoading] = useState(true);
	const [filters, setFilters] = useState({
		_page: 1,
		_limit: 9,
		_sort: 'salePrice:ASC',
	});
	useEffect(() => {
		(async () => {
			try {
				const { data, pagination } = await productApi.getAll(filters);
				setProductList(data);
				console.log({  data, pagination  });
				setPagination(pagination);
			} catch (error) {
				console.log(error);
			}

			setLoading(false);
		})();
	}, [filters]);

	const handlePageChange = (e, page) => {
		setFilters(prevFilter => ({
			...prevFilter,
			_page: page
		}))
	}

	const handleSortChange = (newSortValue) => {
		setFilters((prevFilter) => ({
			...prevFilter,
			_sort: newSortValue,
		}));
	};

	return (
		<Box>
			<Container>
				<Grid container spacing={2}>
					<Grid item className={classes.left}>
						<Paper elevation={0}>Left Col</Paper>
					</Grid>
					<Grid item className={classes.right}>
						<Paper elevation={0}>
							<ProductSort
								onChange={handleSortChange}
								currentSort={filters._sort}
							/>
							{loading ? (
								<ProductSkeletonList length={9} />
							) : (
								<ProductList data={productList} />
							)}
							<Box className={classes.pagination}>
								<Pagination
									count={Math.ceil(pagination.total / pagination.limit)}
									page={pagination.page}
									color='primary'
									onChange={handlePageChange}
								/>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default ListPage;
