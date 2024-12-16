import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, type ,img} = body;

    const product = await prisma.category.create({
      data: {
        name,
        type,
        img
      },
    });

    return new Response(
      JSON.stringify({ message: 'Product created successfully', product }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error creating product:', error);
    return new Response(JSON.stringify({ error: 'Failed to create product' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET(req) {
  try {
    const products = await prisma.category.findMany();

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function DELETE(req) {
  try {
    const url = new URL(req.url);
    const name = url.searchParams.get('name');

    if (!name) {
      return new Response(
        JSON.stringify({ error: 'Name parameter is required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const deletedCategory = await prisma.category.delete({
      where: {
        name
      },
    });

    return new Response(
      JSON.stringify({
        message: `Category '${name}' deleted successfully`,
        deletedCategory,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error deleting category:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to delete category' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
