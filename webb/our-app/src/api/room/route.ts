import { NextRequest, NextResponse } from 'next/server';
import { createRoom, getAllRooms, getRoomById } from '@/services/roomService';

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  try {
    const room = await createRoom(name);
    return NextResponse.json(room, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create room' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const rooms = await getAllRooms();
    return NextResponse.json(rooms);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch rooms' }, { status: 500 });
  }
}