import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Update Product API
export async function PATCH(request, { params }) {
  const { id } = params;
  const {
    title,
    weight,
    shipping, 
    sku,
    price,
    stock,
    videoLink, 
  } = await request.json();

  try {
    // Update product and its specifications
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        title,
        weight: parseFloat(weight),
        shipping, 
        sku,
        price,
        stock,
        videoLink, 
      },
    });

    return new Response(JSON.stringify(updatedProduct), { status: 200 });
  } catch (error) {
    console.error('Error updating product:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to update product' }),
      { status: 500 }
    );
  }
}

// Delete Product API
export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    // Delete product and its related specifications
    await prisma.product.delete({
      where: { id },
    });

    return new Response(
      JSON.stringify({ message: 'Product deleted successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting product:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to delete product' }),
      { status: 500 }
    );
  }
}