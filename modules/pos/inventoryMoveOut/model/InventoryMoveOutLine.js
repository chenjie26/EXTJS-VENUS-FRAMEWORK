﻿Ext.define('Module.pos.inventoryMoveOut.model.InventoryMoveOutLine', {
    extend: 'Ext.data.Model',
    fields: [{ name: 'Id', type: 'int' }, 
		{ name: 'Version', type: 'int' }, 
		{ name: 'Active', type: 'boolean', defaultValue: true }, 
		{ name: 'LastUpdate', type:'date' },  
		{ name: 'UpdateBy', type: 'string' }, 
		{ name: 'CreateDate', type: 'date' }, 
		{ name: 'CreateBy', type: 'string' }, 
		{ name: 'SKU', type: 'string'}, 
		{ name: 'Name', type: 'string'}, 
		{ name: 'UOM', type: 'string'}, 
		{ name: 'Quantity', type: 'float' }, 
		{ name: 'InventoryMove', type:'auto'}],
	validations: [{	type: 'presence', field: 'SKU' }],
    idProperty: 'Id'
});