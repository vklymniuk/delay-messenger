const eventEmitter = require('../event-emitter');
const events = require('../types');
const {logError, logDebug} = require('../../../logger');
const {store} = require('../../repository/messages-event-store');

/**
 * Events datastore - handle and save all events, used to retrieve actual message processing state.
 */

/**
 * @param {MessageEvent} event
 */
eventEmitter.on(events.MESSAGE_NEW, async (event) => {

    try {
        await store(event, events.MESSAGE_NEW);
        logDebug(`Message id: ${event.id} time: ${new Date(event.time)} - EVENT STORED. Date: ${new Date()}`);

    } catch (err) {
        logError(err);
    }
});

/**
 * @param {MessageEvent} event
 */
eventEmitter.on(events.MESSAGE_SCHEDULED, async (event) => {

    try {
        await store(event, events.MESSAGE_SCHEDULED);
        logDebug(`Message id: ${event.id} time: ${new Date(event.time)} - EVENT STORED. Date: ${new Date()}`);

    } catch (err) {
        logError(err);
    }
});

/**
 * @param {MessageEvent} event
 */
eventEmitter.on(events.MESSAGE_PENDING, async (event) => {

    try {
        await store(event, events.MESSAGE_PENDING);
        logDebug(`Message id: ${event.id} time: ${new Date(event.time)} - EVENT STORED. Date: ${new Date()}`);

    } catch (err) {
        logError(err);
    }
});

/**
 * @param {MessageEvent} event
 */
eventEmitter.on(events.MESSAGE_PROCESSING, async (event) => {

    try {
        await store(event, events.MESSAGE_PROCESSING);
        logDebug(`Message id: ${event.id} time: ${new Date(event.time)} - EVENT STORED. Date: ${new Date()}`);

    } catch (err) {
        logError(err);
    }
});

/**
 * @param {MessageEvent} event
 */
eventEmitter.on(events.MESSAGE_PROCESSED, async (event) => {

    try {
        await store(event, events.MESSAGE_PROCESSED);
        logDebug(`Message id: ${event.id} time: ${new Date(event.time)} - EVENT STORED. Date: ${new Date()}`);

    } catch (err) {
        logError(err);
    }
});

/**
 * @param {MessageEvent} event
 */
eventEmitter.on(events.MESSAGE_REMOVING, async (event) => {

    try {
        await store(event, events.MESSAGE_REMOVING);
        logDebug(`Message id: ${event.id} time: ${new Date(event.time)} - EVENT STORED. Date: ${new Date()}`);

    } catch (err) {
        logError(err);
    }
});

/**
 * @param {MessageEvent} event
 */
eventEmitter.on(events.MESSAGE_REMOVED, async (event) => {

    try {
        await store(event, events.MESSAGE_REMOVED);
        logDebug(`Message id: ${event.id} - LAST EVENT STORED. Date: ${new Date()}`);

    } catch (err) {
        logError(err);
    }
});