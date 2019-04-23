/**
 * Fires on new message detected
 */
const MESSAGE_NEW = 'message.new';

/**
 * Fires when message added to "scheduled" queue
 */
const MESSAGE_SCHEDULED = 'message.scheduled';

/**
 * Fires when message moved to "pending" queue
 */
const MESSAGE_PENDING = 'message.pending';

/**
 * Fires when message was removed from "pending"
 */
const MESSAGE_PROCESSING = 'message.processing';

/**
 * Fires when message was successfully drawn
 */
const MESSAGE_PROCESSED = 'message.processed';

/**
 * Fires when message was removed from pipeline
 */
const MESSAGE_REMOVING = 'message.removing';

/**
 * Fires when message was removed
 */
const MESSAGE_REMOVED = 'message.removed';

module.exports = {
    MESSAGE_NEW: MESSAGE_NEW,
    MESSAGE_SCHEDULED: MESSAGE_SCHEDULED,
    MESSAGE_PENDING: MESSAGE_PENDING,
    MESSAGE_PROCESSING: MESSAGE_PROCESSING,
    MESSAGE_PROCESSED: MESSAGE_PROCESSED,
    MESSAGE_REMOVING: MESSAGE_REMOVING,
    MESSAGE_REMOVED: MESSAGE_REMOVED,
};