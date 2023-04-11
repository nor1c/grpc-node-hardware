/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_memory_pb = require('../proto/memory_pb.js');
goog.exportSymbol('proto.nor1c.hardware.CPU', null, global);
goog.exportSymbol('proto.nor1c.hardware.GPU', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nor1c.hardware.CPU = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nor1c.hardware.CPU, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.nor1c.hardware.CPU.displayName = 'proto.nor1c.hardware.CPU';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nor1c.hardware.CPU.prototype.toObject = function(opt_includeInstance) {
  return proto.nor1c.hardware.CPU.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nor1c.hardware.CPU} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nor1c.hardware.CPU.toObject = function(includeInstance, msg) {
  var f, obj = {
    brand: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    numberOfCores: jspb.Message.getFieldWithDefault(msg, 3, 0),
    numberOfThreads: jspb.Message.getFieldWithDefault(msg, 4, 0),
    minGhz: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    maxGhz: +jspb.Message.getFieldWithDefault(msg, 6, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nor1c.hardware.CPU}
 */
proto.nor1c.hardware.CPU.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nor1c.hardware.CPU;
  return proto.nor1c.hardware.CPU.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nor1c.hardware.CPU} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nor1c.hardware.CPU}
 */
proto.nor1c.hardware.CPU.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrand(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumberOfCores(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumberOfThreads(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinGhz(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxGhz(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nor1c.hardware.CPU.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nor1c.hardware.CPU.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nor1c.hardware.CPU} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nor1c.hardware.CPU.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBrand();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNumberOfCores();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getNumberOfThreads();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getMinGhz();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getMaxGhz();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional string brand = 1;
 * @return {string}
 */
proto.nor1c.hardware.CPU.prototype.getBrand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.nor1c.hardware.CPU.prototype.setBrand = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.nor1c.hardware.CPU.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.nor1c.hardware.CPU.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 number_of_cores = 3;
 * @return {number}
 */
proto.nor1c.hardware.CPU.prototype.getNumberOfCores = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.nor1c.hardware.CPU.prototype.setNumberOfCores = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 number_of_threads = 4;
 * @return {number}
 */
proto.nor1c.hardware.CPU.prototype.getNumberOfThreads = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.nor1c.hardware.CPU.prototype.setNumberOfThreads = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double min_ghz = 5;
 * @return {number}
 */
proto.nor1c.hardware.CPU.prototype.getMinGhz = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.nor1c.hardware.CPU.prototype.setMinGhz = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double max_ghz = 6;
 * @return {number}
 */
proto.nor1c.hardware.CPU.prototype.getMaxGhz = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.nor1c.hardware.CPU.prototype.setMaxGhz = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nor1c.hardware.GPU = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nor1c.hardware.GPU, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.nor1c.hardware.GPU.displayName = 'proto.nor1c.hardware.GPU';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nor1c.hardware.GPU.prototype.toObject = function(opt_includeInstance) {
  return proto.nor1c.hardware.GPU.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nor1c.hardware.GPU} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nor1c.hardware.GPU.toObject = function(includeInstance, msg) {
  var f, obj = {
    brand: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    minGhz: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    maxGhz: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    memory: (f = msg.getMemory()) && proto_memory_pb.Memory.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nor1c.hardware.GPU}
 */
proto.nor1c.hardware.GPU.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nor1c.hardware.GPU;
  return proto.nor1c.hardware.GPU.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nor1c.hardware.GPU} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nor1c.hardware.GPU}
 */
proto.nor1c.hardware.GPU.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrand(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinGhz(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxGhz(value);
      break;
    case 5:
      var value = new proto_memory_pb.Memory;
      reader.readMessage(value,proto_memory_pb.Memory.deserializeBinaryFromReader);
      msg.setMemory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nor1c.hardware.GPU.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nor1c.hardware.GPU.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nor1c.hardware.GPU} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nor1c.hardware.GPU.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBrand();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMinGhz();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getMaxGhz();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getMemory();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_memory_pb.Memory.serializeBinaryToWriter
    );
  }
};


/**
 * optional string brand = 1;
 * @return {string}
 */
proto.nor1c.hardware.GPU.prototype.getBrand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.nor1c.hardware.GPU.prototype.setBrand = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.nor1c.hardware.GPU.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.nor1c.hardware.GPU.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double min_ghz = 3;
 * @return {number}
 */
proto.nor1c.hardware.GPU.prototype.getMinGhz = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.nor1c.hardware.GPU.prototype.setMinGhz = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double max_ghz = 4;
 * @return {number}
 */
proto.nor1c.hardware.GPU.prototype.getMaxGhz = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.nor1c.hardware.GPU.prototype.setMaxGhz = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional Memory memory = 5;
 * @return {?proto.nor1c.hardware.Memory}
 */
proto.nor1c.hardware.GPU.prototype.getMemory = function() {
  return /** @type{?proto.nor1c.hardware.Memory} */ (
    jspb.Message.getWrapperField(this, proto_memory_pb.Memory, 5));
};


/** @param {?proto.nor1c.hardware.Memory|undefined} value */
proto.nor1c.hardware.GPU.prototype.setMemory = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.nor1c.hardware.GPU.prototype.clearMemory = function() {
  this.setMemory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.nor1c.hardware.GPU.prototype.hasMemory = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.nor1c.hardware);
