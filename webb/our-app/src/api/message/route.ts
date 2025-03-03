import { NextRequest, NextResponse } from 'next/server';
import { createMessage, getMessagesByRoom, getLatestMessages, deleteMessage } from '@/services/messageService';

export async function POST(req: NextRequest) {
    const { content, senderName, roomId } = await req.json();
    try {
        const message = await createMessage(content, senderName, roomId);
        return NextResponse.json(message, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create message' }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const roomId = searchParams.get('roomId');
    const limit = parseInt(searchParams.get('limit') || '50', 10);

    try {
        if (roomId) {
            const messages = await getMessagesByRoom(roomId, limit);
            return NextResponse.json(messages);
        } else {
            const messages = await getLatestMessages(limit);
            return NextResponse.json(messages);
        }
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    try {
        if (id) {
            await deleteMessage(id);
            return NextResponse.json({}, { status: 204 });
        } else {
            return NextResponse.json({ error: 'Message ID is required' }, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
    }
}