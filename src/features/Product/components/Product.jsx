import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { STATIC_HOST, THUMNAIL_PLACEHOLDER } from '../../../constants/common';

Product.propTypes = {
	product: PropTypes.object,
};

// https://instagram.fdad3-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/151346507_1514135442121984_7968075321487285793_n.jpg?tp=1&_nc_ht=instagram.fdad3-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=Os8AHrytopUAX_L91Uv&edm=AP_V10EAAAAA&ccb=7-4&oh=303b2816a69422f6f26d616b3fd6e4c7&oe=60925E62&_nc_sid=4f375e


function Product({ product }) {
	const defaultThumbnail = product.thumbnail
		? `${STATIC_HOST}${product.thumbnail?.url}`
		: THUMNAIL_PLACEHOLDER;

	return (
		<Box padding={1}>
			<Box padding={1}>
				<img src={defaultThumbnail} width='100%' alt={`${product.name}`} />
			</Box>
			<Typography variant='body2'>{product.name}</Typography>
			<Typography variant='body2'>{product.salePrice}</Typography>
		</Box>
	);
}

export default Product;
